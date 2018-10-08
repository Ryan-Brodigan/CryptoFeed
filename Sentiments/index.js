const Twit = require('twit');
const dotenv = require('dotenv');
var Sentiment = require('sentiment');
var sentiment = new Sentiment();
const colors = require('colors/safe');
var plotly = require('plotly')("All41n","6qjPlu8xOTuFuE4YiBK6");


var positiveTweets = [];
var negativeTweets = [];
var mixedTweets = [];
dotenv.config();

const { CONSUMER_KEY
      , CONSUMER_SECRET
      , ACCESS_TOKEN
      , ACCESS_TOKEN_SECRET
      } = process.env;

const config_twitter = {
    consumer_key: CONSUMER_KEY,
    consumer_secret: CONSUMER_SECRET,
    access_token: ACCESS_TOKEN,
    access_token_secret: ACCESS_TOKEN_SECRET,
    timeout_ms: 60*1000
};

let api = new Twit(config_twitter);

function get_text(tweet) {
    let txt = tweet.retweeted_status ? tweet.retweeted_status.full_text : tweet.full_text;
    return txt.split(/ |\n/).filter(v => !v.startsWith('http')).join(' ');
 }

async function get_tweets(q, count) {
    let tweets = await api.get('search/tweets', {q, count, 'tweet_mode': 'extended'});
    return tweets.data.statuses.map(get_text);
}

async function main() {
    let keyword = 'warriors';
    let count = 100;
    let tweets = await get_tweets(keyword, count);
    for (tweet of tweets) {
        let score = sentiment.analyze(tweet).comparative;
        tweet = `${tweet}\n`;
        if (score > 0) {
            positiveTweets.push(score);
            //tweet = colors.green(tweet);
        } else if (score < 0) {
            negativeTweets.push(score);
        } else {
            mixedTweets.push(score);
        }
        //console.log(tweet)
    }

    console.log("Positive Tweets\n",positiveTweets)
    console.log("Negative Tweets\n",negativeTweets)
    console.log("Mixed Feeling Tweets\n",mixedTweets)

    var tweetsGraph = {
        x: positiveTweets,
        y: negativeTweets,
        mode: "markers",
        name: "Scatter Plots of Positive and Negative Tweets",
        text: ["Negative"],
        marker: {
          color: "rgb(178,34,34)",
          size: 12,
          line: {
            color: "white",
            width: 0.5
          }
        },
        type: "scatter"
      };
      var tweetsGraph2 = {
        x: negativeTweets,
        y: positiveTweets,
        mode: "markers",
        name: "Scatter Plots of Positive and Negative Tweets",
        text: ["Positive"],
        marker: {
          color: "rgb(34,139,34)",
          size: 12,
          line: {
            color: "white",
            width: 0.5
          }
        },
        type: "scatter"
      };
      var data = [tweetsGraph,tweetsGraph2];
      var layout = {
        title: "Positive and Negative Tweets Score Difference",
        xaxis: {
          title: "Positive and Negative Tweets Score",
          showgrid: false,
          zeroline: false
        },
        yaxis: {
          title: "Percent",
          showline: false
        }
      };
      var graphOptions = {layout: layout, filename: "line-style", fileopt: "overwrite", displayModeBar:"false"};
        plotly.plot(data, graphOptions, function (err, msg) {
            console.log(msg);
        });
}



main();