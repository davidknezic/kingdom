import superagent from './api/utils/superagent'
import {MongoClient} from 'mongodb'
import assert from 'assert'

var authKey = '201a03b2f0ef8b311cdd2157c21c3666'

// Connection URL
var url = 'mongodb://localhost:27017/kingdom';

export default function ensureData(cb) {
  // Use connect method to connect to the Server
  MongoClient.connect(url, function(err, db) {
    function done() {
      db.close();
      cb();
    }

    assert.equal(null, err);

    var flats = db.collection('flats');

    flats.find({}).count((err, count) => {

      if(count > 1) {
        console.log('data is there')
        done();
      } else {
        console.log('data is not there')

        query(1, [], (data) => {

          console.log('data inserted')

          var result = flats.insertMany(data, null, (err, result) => {
            done();
          });

        });
      }
    })

  });
}

function query(page, flats, cb) {
  superagent
    .get('https://api-2445581357976.apicast.io:443/rs/real-estates')
    .set('auth', authKey)
    .query({ language: 'en' })
    .query({ chooseType: 'rentflat' })
    .query({ sort: 'l' })
    .query({ page: !page ? 1 : page })
    .query({ numberResults: 1000 })
    .end(function(err, result){
      if (result.ok) {

        console.log(result.body.pageCount, page);

        flats = flats.concat(result.body.items);

        if(result.body.pageCount > page) {
          query(page+1, flats, cb);
        } else {
          cb(flats);
        }

      } else {
        res.send(err)
      }
    })
}
