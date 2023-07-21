import React from "react";
import { useForm } from "react-hook-form";

const YouTubeForm = () => {
  const form = userForm();

  return (
    <div>
      <form>
        <label htmlFor="username">Username</label>
        <input type="text" id="name" name="username" />

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" />

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" />

        <button>Submit</button>
      </form>
    </div>
  );
};

export default YouTubeForm;
