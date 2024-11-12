import { ReactNode } from "react";

interface PercentagemItemProps {
  icon: ReactNode;
  title: string;
  value: number;
}

const PercentageItem = ({ icon, title, value }: PercentagemItemProps) => {
  return (
    <div className="flex items-center justify-between">
      {/* ICONE */}
      <div className="flex items-center gap-3">
        <div className="bg-white bg-opacity-[3%] rounded-lg p-2">{icon}</div>
        <p className="text-sm text-muted-foreground">{title}</p>
      </div>
      {/* VALOR */}
      <p className="font-bold text-sm">{value}%</p>
    </div>
  );
};

export default PercentageItem;
