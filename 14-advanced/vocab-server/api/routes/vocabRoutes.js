const vocabController = require('../controllers/vocabController');

module.exports = (app) => {
  app
    .route('/words')
    .get(vocabController.listAllWords)
    .post(vocabController.createAWord);

  app
    .route('/words/:wordId')
    .get(vocabController.readAWord)
    .put(vocabController.updateAWord)
    .delete(vocabController.deleteAWord);
};
