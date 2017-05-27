package backend.controller;

import java.io.Serializable;

/**
 * Created by SG0222865 on 5/25/2017.
 */
public class Command implements Serializable {

    private static final long serialVersionUID = -7788619177798333712L;

    private Long id;
    private String word;
    private String description;

    public Command(Long id, String word, String description, String operation) {
        this.id = id;
        this.word = word;
        this.description = description;
        this.operation = operation;
    }

    public Command(String word, String description) {
        this.word = word;
        this.description = description;
    }

    public Command(){}

    private String operation;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getWord() {
        return word;
    }

    public void setWord(String word) {
        this.word = word;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getOperation() {
        return operation;
    }

    public void setOperation(String operation) {
        this.operation = operation;
    }
}
