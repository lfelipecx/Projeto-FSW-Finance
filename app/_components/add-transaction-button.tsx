"use client";

import { useState } from "react";
import UpseartTransactionDialog from "./upsert-transaction-dialog";
import { ArrowDownUpIcon } from "lucide-react";
import { Button } from "./ui/button";
import { Tooltip, TooltipProvider, TooltipTrigger } from "./ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";

interface AddTransactionButtonProps {
  userCanAddTransaction?: boolean;
}

const AddTransactionButton = ({
  userCanAddTransaction,
}: AddTransactionButtonProps) => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false);

  return (
    <>
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="rounded-full font-bold"
              onClick={() => setDialogIsOpen(true)}
              disabled={!userCanAddTransaction}
            >
              Adicionar transação
              <ArrowDownUpIcon />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            {!userCanAddTransaction &&
              "Você atingiu o limete de transações. Atualize para o Plano Premium."}
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UpseartTransactionDialog
        isOpen={dialogIsOpen}
        setIsOpen={setDialogIsOpen}
      />
    </>
  );
};

export default AddTransactionButton;
