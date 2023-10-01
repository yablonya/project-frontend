import React, {Dispatch, FC, SetStateAction, useState} from "react";
import {User} from "@/types/User";
import styles from "@/components/notes-block/NotesBlock.module.css"
import {addNote, deleteNote} from "@/lib/api";
import Image from 'next/image'
import binIcon from "@/public/icons/bin.png"

interface NotesBlockProps {
  email: string,
  notes: string[],
  updateUser: Dispatch<SetStateAction<User | null>>
}
const NotesBlock:FC<NotesBlockProps> = ({
    email,
    notes,
    updateUser
  }) => {
  const [formData, setFormData] = useState({
    note: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const clearForm = () => {
    setFormData({
      note: '',
    });
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const response: Promise<User> = addNote(email, formData.note);
    const user: User = await response;
    updateUser(user)
    clearForm();
  }

  const handleDeleteNote = async (note: string, email: string) => {
    const response: Promise<User> = deleteNote(email, note);
    const user: User = await response;
    updateUser(user)
  }

  return (
    <div className={styles.wrapper}>
      {notes[0] ?
        notes.map((note, index) => (
          <div key={index} className={styles.noteContainer}>
            <p>{note}</p>
            <Image
              src={binIcon}
              width={20}
              height={20}
              alt="delete"
              onClick={() => handleDeleteNote(note, email)}
            />
          </div>
        ))
        :
        <div className={styles.ifNoNotes}>You have no notes yet</div>
      }
      <form className={styles.addNoteForm} onSubmit={handleSubmit}>
        <textarea
          name="note"
          placeholder="Enter your note"
          value={formData.note}
          onChange={handleChange}
        />
        <button type="submit">Add note</button>
      </form>
    </div>
  );
};

export default NotesBlock;