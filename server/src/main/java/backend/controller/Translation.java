package backend.controller;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by SG0222865 on 5/25/2017.
 */

@JsonIgnoreProperties(ignoreUnknown = true)
public class Translation {

    private int code;
    private String lang;
    private List<String> text;

    public int getCode() {
        return code;
    }

    public void setCode(int code) {
        this.code = code;
    }

    public String getLang() {
        return lang;
    }

    public void setLang(String lang) {
        this.lang = lang;
    }

    public List<String> getText() {
        return text;
    }

    public void setText(List<String> text) {
        if(this.text==null){
            this.text=new ArrayList<>();
        }
        this.text = text;
    }
}
