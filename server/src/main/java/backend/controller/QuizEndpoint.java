package backend.controller;
/*
 *
 * creation date: 6/24/2017
 *
 * @author Albert Podraza
 */

import backend.database.Dictionary;
import backend.database.DictionaryDAO;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;


@RestController
public class QuizEndpoint {

    @Autowired
    ApplicationContext ctx;

    DictionaryDAO repository;
    private Random r;
    private List<Dictionary> dictionary;
    private int initialQuizSize;

    @RequestMapping(value = "/quiz", method = RequestMethod.GET)
    public @ResponseBody
    Dictionary startQuiz() {
        successfulRecords = new ArrayList<>();
        if (repository == null) {
            repository = (DictionaryDAO) ctx.getAutowireCapableBeanFactory().getBean("dictionaryDAO");
        }
        dictionary = new ArrayList();
        for (Dictionary d : repository.findAll()) {
            dictionary.add(d);
        }
        initialQuizSize = dictionary.size();
        return generateWord(true);
    }

    private static final long SUCCSESS = 1;
    private static final long FAILURE = 0;

    private Dictionary generateWord(boolean status) {
        if (r == null) {
            r = new Random();
        }
        int random = r.nextInt(dictionary.size());
        while (!(random >= 0) || !(random < dictionary.size())) {
            random = r.nextInt(dictionary.size());
        }
        Dictionary result = dictionary.get(random);

        result.setId(status ? SUCCSESS : FAILURE);
        return result;
    }

    @RequestMapping(value = "/quiz", method = RequestMethod.POST)
    public Dictionary checkAndGenerate(@RequestBody Dictionary dict) {
        boolean statusFlag = false;
        int itemToDelete = -1;
        for (Dictionary singleDictionary : dictionary) {
            if (singleDictionary.getWord().equals(dict.getWord())) {
                if (singleDictionary.getDescription().equals(dict.getDescription())) {
                    itemToDelete = dictionary.indexOf(singleDictionary);
                    statusFlag = true;
                }
            }
        }
        if (itemToDelete >= 0) {
            successfulRecords.add(dictionary.get(itemToDelete));
            dictionary.remove(itemToDelete);
        }
        Dictionary result = generateWord(statusFlag);
        while (result.getWord().equals(dict.getWord())) {
            result = generateWord(statusFlag);
        }
        return result;
    }

    private List<Dictionary> successfulRecords;

    @RequestMapping(value = "/summary", method = RequestMethod.GET)
    public String getSummary() {
        String result = "You have learned " + successfulRecords.size() + " of " + initialQuizSize + " words:\n";
        for (Dictionary dict : successfulRecords) {
            result += dict.getWord() + " - " + dict.getDescription() + "\n";
        }
        return result;
    }

}
