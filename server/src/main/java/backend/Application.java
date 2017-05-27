package backend;

import java.util.Arrays;

import backend.database.Dictionary;
import backend.database.DictionaryDAO;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class Application {

    private static final Logger log = LoggerFactory.getLogger(Application.class);

    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);
    }

    @Bean
    public CommandLineRunner commandLineRunner(ApplicationContext ctx) {
        return args -> {

            System.out.println("Let's inspect the beans provided by Spring Boot:");

            String[] beanNames = ctx.getBeanDefinitionNames();
            Arrays.sort(beanNames);
            for (String beanName : beanNames) {
                System.out.println(beanName);
            }
            DictionaryDAO repository = (DictionaryDAO) ctx.getAutowireCapableBeanFactory().getBean("dictionaryDAO");
//            repository.save(new Dictionary("egg", "jajko"));
//            repository.save(new Dictionary("goat", "koza"));
//            repository.save(new Dictionary("miasto", "city"));

            log.info("Customers found with findAll():");
            log.info("-------------------------------");
            for (Dictionary dictionary : repository.findAll()) {
                log.info(dictionary.toString());
            }
            log.info("");

        };
    }

}