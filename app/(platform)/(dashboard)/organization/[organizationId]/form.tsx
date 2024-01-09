"use client";

import { create, State } from "@/actions/create-board";
import { Button } from "@/components/ui/button";
import { useFormState } from "react-dom";
import { FormButton } from "./form-button";
import { FormInput } from "./form-input";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(create, initialState as State);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />

      <FormButton />
    </form>
  );
};
