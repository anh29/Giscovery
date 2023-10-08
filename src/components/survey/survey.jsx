import React, { useEffect, useState } from "react";
import axios from "axios";
import "./survey.css";

function Survey() {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedTags, setSelectedTags] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    axios
      .get(
        "https://testwebapibyvspurple20230309182427.azurewebsites.net/api/Tags/GetAllTagsAndCategories?fbclid=IwAR2AImC-wkQ0LbdGbl2DfPq0Vm97xaiFgGS0wtcHWczQp21JMsc8IhNbWkg"
      )
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const isSelectionValid = () => {
    if (data[currentPage]) {
      const currentTags = data[currentPage].tags;

      return currentTags.some((tag) => selectedTags.includes(tag.id));
    }

    return false;
  };

  const nextPage = () => {
    if (!isSelectionValid()) {
      return;
    }
    setCurrentPage(currentPage + 1);
    setSelectedItem(null);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const saveResults = () => {
    axios
      .put(
        `https://testwebapibyvspurple20230309182427.azurewebsites.net/api/Tags/SaveTagsToIdUser?IdUser=1`,
        selectedTags,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        alert("Success.");
        window.location.href = "/";
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleTagSelection = (tagId) => {
    if (selectedTags.includes(tagId)) {
      setSelectedTags(selectedTags.filter((id) => id !== tagId));
    } else {
      setSelectedTags([...selectedTags, tagId]);
    }
  };

  const handleItemClick = (tag) => {
    setSelectedItem(tag);
  };

  return (
    <div className="contain">
      <div>
        {data.length > 0 && (
          <ul>
            {data[currentPage] && (
              <li key={data[currentPage].id}>
                <div className="question">
                  <p className="questionTitle">{data[currentPage].name}</p>
                </div>
                <ul className="list">
                  {data[currentPage].tags.map((tag) => (
                    <li
                      key={tag.id}
                      className={`item ${
                        selectedItem === tag ? "selected" : ""
                      }`}
                      onClick={() => handleItemClick(tag)}
                    >
                      <label>
                        <input
                          type="checkbox"
                          value={tag.id}
                          checked={selectedTags.includes(tag.id)}
                          onChange={() => handleTagSelection(tag.id)}
                        />
                        {tag.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </li>
            )}
          </ul>
        )}
      </div>
      {currentPage > 0 && (
        <button className="back" onClick={previousPage}>
          Back
        </button>
      )}
      {currentPage < data.length - 1 ? (
        <button
          className={`next ${!isSelectionValid() ? "disabled" : ""}`}
          onClick={nextPage}
        >
          Next
        </button>
      ) : (
        <button
          className={`save ${!isSelectionValid() ? "disabled" : ""}`}
          onClick={saveResults}
        >
          Save
        </button>
      )}
    </div>
  );
}

export default Survey;
