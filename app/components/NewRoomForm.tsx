import React, { useState } from 'react';
import TextInput from './TextInput';
import Button from './Button';

interface NewRoomFormProps {
  onCreate: (name: string) => void;
}

const NewRoomForm = ({ onCreate }: NewRoomFormProps) => {
  const [name, setName] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onCreate(name);
    setName('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <TextInput
        value={name}
        onChange={setName}
        placeholder="Room name"
        className="mr-2"
      />
      <Button type="submit">Create Room</Button>
    </form>
  );
};

export default NewRoomForm;
