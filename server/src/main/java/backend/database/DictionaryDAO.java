package backend.database;

import org.springframework.data.repository.CrudRepository;

import javax.transaction.Transactional;
import java.util.List;

/**
 * Created by SG0222865 on 5/25/2017.
 */
@Transactional
public interface DictionaryDAO extends CrudRepository<Dictionary, Long> {
    List<Dictionary> findByWord(String word);
}

