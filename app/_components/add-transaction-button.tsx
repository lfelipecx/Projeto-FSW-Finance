"use client";

import { useState } from "react";
import UpseartTransactionDialog from "./upsert-transaction-dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";

const AddTransactionButton = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <div>
      <Button
        className="rounded-full font-bold"
        onClick={() => setDialogIsOpen(true)}
      >
        Adicionar transação
        <ArrowDownUpIcon />
      </Button>
      <UpseartTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </div>
  );
};

export default AddTransactionButton;
