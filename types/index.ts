import { Control, UseFormHandleSubmit } from "react-hook-form";

export type NavigatorParamList = {
  Home: undefined;
  Players: { schoolId: string } | undefined;
  Court: { playerId: string } | undefined;
  Schools: undefined;
  Test: undefined;
};

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

export type TouchspaceProps = {
  viewMode?: boolean;
  value: Coordinates;
  onChange: (value: any) => void;
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

export type SidebarProps = {
  viewMode: boolean;
  toggleViewMode: () => void;
  control: Control<FormData>;
  handleSubmit: UseFormHandleSubmit<FormData>;
}