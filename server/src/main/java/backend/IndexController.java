package backend;

import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
public class IndexController {

    @RequestMapping("/")
    public String index() {
        return "Greetings from Agile cards backend application!";
    }

}