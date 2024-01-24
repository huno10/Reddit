import React, { ChangeEvent, useState } from "react";
import styles from './commentForm.css';
import { useRecoilState } from "recoil";
import { commentsState } from "../../atams/atams";

export function CommentForm() {
  const [commentValue, setCommentValue] = useRecoilState(commentsState);
  const [inputValue, setInputValue] = useState(commentValue);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setCommentValue(inputValue);
    alert(`Ваши комментарий: ${inputValue}`);
    console.log(inputValue);
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.input}
        value={inputValue}
        onChange={handleChange}
      />
      <button type="submit" className={styles.button}>
        Комментировать
      </button>
    </form>
  );
}
