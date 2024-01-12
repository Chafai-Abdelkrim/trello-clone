"use client";

import { ListWithCards } from "@/types";
import { List } from "@prisma/client";
import { ListForm } from "./list-form";

interface ListConatinerProps {
  data: ListWithCards[];
  boardId: string;
}

export const ListContainer = ({ data, boardId }: ListConatinerProps) => {
  return (
    <ol>
      <ListForm />
      <div className="flex-shrink-0 w-1" />
    </ol>
  );
};
