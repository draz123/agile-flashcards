package backend.controller;

import backend.Application;
import backend.database.Dictionary;
import backend.database.DictionaryDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by SG0222865 on 5/25/2017.
 */

@RestController
public class DatabaseEndpoint {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    @Autowired
    ApplicationContext ctx;

    private  DictionaryDAO repository;

    @RequestMapping(value = "/dictionary", method = RequestMethod.POST)
    public Dictionary operateOnDictionary(@RequestBody Command command) {
        if (repository == null) {
            repository = (DictionaryDAO) ctx.getAutowireCapableBeanFactory().getBean("dictionaryDAO");
        }
        if (command.getOperation().equals("add")) {
            return repository.save(new Dictionary(command.getWord(), command.getDescription()));
        } else if (command.getOperation().equals("delete")) {
            repository.delete(command.getId());
            return null;
        } else if (command.getOperation().equals("edit")) {
            Long id = repository.findByWord(command.getWord()).get(0).getId();
            repository.delete(id);
            repository.save(new Dictionary(command.getWord(), command.getDescription()));
            return null;
        } else {
            return null;
        }
    }


    @RequestMapping(value = "/dictionary", method = RequestMethod.GET)
    public @ResponseBody
    List<Dictionary> getDictionary() throws InterruptedException {
        if (repository == null) {
            repository = (DictionaryDAO) ctx.getAutowireCapableBeanFactory().getBean("dictionaryDAO");
        }
        List result = new ArrayList();
        for (Dictionary d : repository.findAll()) {
            result.add(d);
        }
        return result;
    }

}
