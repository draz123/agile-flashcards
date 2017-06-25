package backend.controller;

import backend.Application;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

/**
 * Created by SG0222865 on 5/25/2017.
 */

@RestController
public class TranslatorEndpoint {

    private final String API_KEY = "trnsl.1.1.20170525T144715Z.6bcfb9cc521a5993.3bded6b075eb3024b8e301beda8a0a5ce3948ceb";
    private final String URL = "https://translate.yandex.net/api/v1.5/tr.json/translate";
    private static final Logger log = LoggerFactory.getLogger(Application.class);


    @RequestMapping("/translate")
    public  @ResponseBody Command getPolishTranslation(@RequestParam(value = "word") String input) {
        RestTemplate restTemplate = new RestTemplate();
        System.out.println(URL + "?key=" + API_KEY + "text=" + input + "lang=en-pl");
        Translation translation = restTemplate.getForObject(URL + "?key=" + API_KEY + "&text=" + input + "&lang=en-pl", Translation.class);
        log.info(translation.toString());

        return new Command(input,translation.getText().get(0));
    }

}
