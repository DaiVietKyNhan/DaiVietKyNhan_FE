import { authOptions } from "@lib/authOptions";
import { IFigureResponseModel } from "@models/figure/repsonse";
import SelectCharacterPage from "@containers/Starter/Select-character";
import figureService from "@services/figure";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ROUTES } from "@routes";
import userService from "@services/user";
import { IMeResponse } from "@models/user/response";

async function getFigure() {
  const figure = await figureService.getAllFigures();
  return figure;
}

async function userMe() {
  const user = await userService.getMe();
  return user;
}

export default async function SelectCharacter() {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect(ROUTES.PUBLIC.HOME);
  }
  const figure = (await getFigure()) as IFigureResponseModel;

  const user = (await userMe()) as IMeResponse;
  if (user.data?.figureId) {
    redirect(ROUTES.PUBLIC.MAP);
  }


  return <SelectCharacterPage figures={figure.data?.results || []} />;
}
