package backend.database;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * Created by SG0222865 on 5/25/2017.
 */
@Entity
@Table(name = "dictionary")
public class Dictionary {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    @NotNull
    private String word;
    @NotNull
    private String description;

    public Dictionary(){}

    public Dictionary(String word, String description) {
        this.word = word;
        this.description = description;
    }

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

    public String toString(){
        return "Word: " + this.word + " Description: " + this.description;
    }

}



