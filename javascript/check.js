const Mocha = require('mocha');
const assert = require('assert');

const answers = require('../answers.json');
const problems = Object.keys(answers);

const suite = new Mocha.Suite('Project Euler');
const runner = new Mocha.Runner(suite);
const reporter = new Mocha.reporters.Spec(runner);

problems.forEach(problem => {
  try {
    if (!process.argv[2] || process.argv[2] === problem) {
      const solution = require('./problems/'+problem+'.js');
      suite.addTest(new Mocha.Test(problem, function() {
        return solution().then(hypothesis => assert.equal(hypothesis, answers[problem]));
      }));
    }
  } catch (e) {}
});

runner.run();