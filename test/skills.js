'use strict';

let skills = require('../src/skills'),
  should = require('should');

describe('Check your skills', () => {
  it('Check your node skills', () => {
    let score = 0;

    score += skills.express +
      skills.socket +
      skills.sails +
      skills.nodeStreams +
      skills.nodeCluster +
      skills.nodeCrypto +
      skills.nodeHTTP +
      skills.nodal +
      skills.meteor;

    score *= skills.node;
    score.should.be.above(2);
  });

  it('Check your database skills', () => {
    let score = 0;

    score += skills.mysql +
      skills.couchdb +
      skills.leveldb +
      skills.mongodb +
      skills.neo4j +
      skills.postgresql +
      skills.redis +
      skills.sqllite +
      skills.elasticsearch;

    score.should.be.above(0);
  });

  it('Check your front-end-skills', () => {
    let score = 0;

    score += skills.jquery +
      skills.angularjs +
      skills.react +
      skills.redux +
      skills.backbone +
      skills.todomvc +
      skills.emberjs +
      skills.mean +
      skills.polymer +
      skills.knockout +
      skills.frameworkjs +
      skills.spine +
      skills.brick +
      skills.nuclearjs +
      skills.dojo +
      skills.matreshka +
      skills.knockout;

    score.should.be.above(0);
  });
});