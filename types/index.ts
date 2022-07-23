import { Control } from "react-hook-form";

export type Coordinates = {
  x: number;
  y: number;
};

export type FormData = {
  offenseType: 'Hit' | 'Shot';
  defenseType: 'Block' | 'Pull';
  blockLocation: 'Left' | 'Center' | 'Right';
  approachLocation: 'Left' | 'Center' | 'Right';
  hitLocation: Coordinates;
};

export type PlayerProps = {
  name: string;
  school: string;
  number: number;
  avatar: string;
};

export type ButtonGroupProps = {
  value: string;
  onChange: (value: any) => void;
  colorScheme?: string;
  elements: string[];
};

export type SidebarButtonsProps = {
  control: any;
  onSubmit: any;
};

export type CourtProps = {
  viewMode: boolean;
  control: Control<FormData>;
}

