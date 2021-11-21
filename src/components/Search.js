import React, { useEffect, useState } from "react";
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('Programming');
  const [debouncedTerm,setDebounceTerm]=useState(term);
  const [results, setResults] = useState([]);

  console.log(results);
  useEffect(() => {
    const search = async () => {
      const { data } = await axios.get(' https://en.wikipedia.org/w/api.php', {
        params: {

          action: 'query',
          list: 'search',
          origin: '*',
          format: 'json',
          srsearch: term,

        }
      });
      setResults(data.query.search);

    };
    if (term && !results.length) {
      search();
    }
    else {

      const timeoutid = setTimeout(() => {
        if (term) {
          search();
        }

      }, 500);

      return () => (
        clearTimeout(timeoutid)
      );

    }


  }, [term]);

  const renderResults = results.map((result) => {

    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a className="ui button"
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
          >GO</a>

        </div>
        <div className="content">
          <div className="header">
            {result.title}

          </div>
          <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>


        </div>

      </div>

    );
  });

  return (
    <React.Fragment>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input className="input"
            value={term}
            onChange={(e) => { setTerm(e.target.value) }}
          ></input>
        </div>

      </div>
      <div className="ui celled list ">
        {renderResults}
      </div>
    </React.Fragment>
  );
}

export default Search;