package backend.database;

import backend.Application;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

/**
 * Created by SG0222865 on 5/25/2017.
 */
public class DatabaseHelper {

    private static final Logger log = LoggerFactory.getLogger(Application.class);


    public static void checkDatabaseContent(DictionaryDAO repository) {
        log.info("Customers found with findAll():");
        log.info("-------------------------------");
        for (Dictionary dictionary : repository.findAll()) {
            log.info(dictionary.toString());
        }
        log.info("");

    }
}
