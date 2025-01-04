import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/HomeScreen";
import DetailsScreen from "../../screens/DetailsScreen";
import EditDataStore from "../../screens/EditDataStore";
import ManageMembers from "../../screens/ManageMembers";
import ManageNotifications from "../../screens/ManageNotifications";
import ManageProviders from "../../screens/ManageProviders";
import ManageStores from "../../screens/ManageStores";
import ModifyPassword from "../../screens/ModifyPassword";
import Notification from "../../screens/Notification";
import PersonInformation from "../../screens/PersonInformation";
import PlansManager from "../../screens/PlansManager";
import BarcodeScannerApp from "../../screens/ScamProduct";
import DeleteStore from "../../screens/DeleteStore";
import ExportReport from "../../screens/ExportReport";
import FAQ from "../../screens/FAQ";

const Stack = createNativeStackNavigator();

export default function PrivateRoute() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={DetailsScreen} />
      <Stack.Screen
        name="EditDataStore"
        component={EditDataStore}
        options={{ title: "Editar Loja" }}
      />
      <Stack.Screen
        name="ManageMembers"
        component={ManageMembers}
        options={{ title: "Gerenciar Membros" }}
      />
      <Stack.Screen
        name="ManageNotifications"
        component={ManageNotifications}
        options={{ title: "Notificações" }}
      />
      <Stack.Screen
        name="ManageProviders"
        component={ManageProviders}
        options={{ title: "Gerenciar Fornecedores" }}
      />
      <Stack.Screen
        name="ManageStores"
        component={ManageStores}
        options={{ title: "Gerenciar Lojas" }}
      />
      <Stack.Screen
        name="ModifyPassword"
        component={ModifyPassword}
        options={{ title: "Alterar Senha" }}
      />
      <Stack.Screen
        name="Notification"
        component={Notification}
        options={{ title: "Notificações" }}
      />
      <Stack.Screen
        name="PersonInformation"
        component={PersonInformation}
        options={{ title: "Informações Pessoais" }}
      />
      <Stack.Screen
        name="PlansManager"
        component={PlansManager}
        options={{ title: "Gerenciar Planos" }}
      />
      <Stack.Screen
        name="BarcodeScannerApp"
        component={BarcodeScannerApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="DeleteStore"
        component={DeleteStore}
        options={{ title: "Excluir Loja" }}
      />
      <Stack.Screen
        name="ExportReport"
        component={ExportReport}
        options={{ title: "Exportar Relatório" }}
      />
      <Stack.Screen name="FAQ" component={FAQ} options={{ title: "FAQ" }} />
    </Stack.Navigator>
  );
}
