import { NativeStackScreenProps } from "@react-navigation/native-stack";

export type NavigatorParamList = {
  Home: undefined;
  Players: { schoolId: string } | undefined;
  Court: { playerId: string };
  Data: { playerId: string };
  Schools: undefined;
  Test: undefined;
};

export type PlayerViewProps = NativeStackScreenProps<NavigatorParamList, 'Players'>;
export type CourtViewProps = NativeStackScreenProps<NavigatorParamList, 'Court'>;
export type DataViewProps = NativeStackScreenProps<NavigatorParamList, 'Data'>;