interface IRound {
  id: string;
  name: string;
  code: string;
}

interface ICurrentGame {
  id: string;
  helpUsed: any;
  isPassed: boolean;
  isCompleted: boolean;
}

interface IStageSetting {
  nextStageId: string;
  helps: Array<string>;
}

interface IUserStage {
  id: string;
  bookId: string;
  name: string;
  detail: string;
  currentGames: Array<ICurrentGame>;
  stageSetting: IStageSetting;
}

interface IStage {
  id: string;
  name: string;
  detail: string;
}
