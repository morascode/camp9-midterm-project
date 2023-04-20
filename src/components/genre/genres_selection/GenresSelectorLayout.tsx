import clsx from 'clsx';
import React, { useState } from 'react';
import GenreIconButton from './GenreIconButton';

export const EmojiLibary = [
  {
    Genre: 'Action',
    Emoji: '🧨',
    id: 1,
    isSelected: false,
  },
  {
    Genre: 'Adventure',
    Emoji: '💎',
    id: 2,
    isSelected: false,
  },
  {
    Genre: 'Animation',
    Emoji: '🦁',
    id: 3,
    isSelected: false,
  },
  {
    Genre: 'Comedy',
    Emoji: '🤣',
    id: 4,
    isSelected: false,
  },
  {
    Genre: 'Crime',
    Emoji: '🚔',
    id: 5,
    isSelected: false,
  },
  {
    Genre: 'Documentary',
    Emoji: '🎥',
    id: 6,
    isSelected: false,
  },
  {
    Genre: 'Drama',
    Emoji: '🎭',
    id: 7,
    isSelected: false,
  },
  {
    Genre: 'Family',
    Emoji: '👨‍👩‍👧',
    id: 8,
    isSelected: false,
  },
  {
    Genre: 'Fantasy',
    Emoji: '🦄',
    id: 9,
    isSelected: false,
  },
  {
    Genre: 'History',
    Emoji: '⏳',
    id: 10,
    isSelected: false,
  },
  {
    Genre: 'Horror',
    Emoji: '🔪',
    id: 11,
    isSelected: false,
  },
  {
    Genre: 'Music',
    Emoji: '🎧',
    id: 12,
    isSelected: false,
  },
  {
    Genre: 'Mystery',
    Emoji: '🔎',
    id: 13,
    isSelected: false,
  },
  {
    Genre: 'Romance',
    Emoji: '😍',
    id: 14,
    isSelected: false,
  },
  {
    Genre: 'Science Fiction',
    Emoji: '👽',
    id: 15,
    isSelected: false,
  },
  {
    Genre: 'Thriller',
    Emoji: '😱',
    id: 16,
    isSelected: false,
  },
];

interface Props {
  setCounter: React.Dispatch<React.SetStateAction<number>>;
  counter: number;
}

function GenresSelectorLayout(props: Props) {
  return (
    <div className="grid grid-cols-4 gap-8">
      {EmojiLibary.map(param => (
        <GenreIconButton
          emoji={param.Emoji}
          genre={param.Genre}
          id={param.id}
          counter={props.counter}
          setCounter={props.setCounter}
        ></GenreIconButton>
      ))}
    </div>
  );
}

export default GenresSelectorLayout;
