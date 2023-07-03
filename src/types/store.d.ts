/**
 * pinia store 类型声明
 */
declare namespace AppSystem {
  interface IConfig {
    openaiAPIKeyStore: {
      -readonly [K in keyof typeof Model]: string;
    };
    locale: import('@/constants').Language,
    theme: import('@/constants').Theme,
    model: import('@/constants').Model,
    hostStore:{
      -readonly [K in keyof typeof Model]: string;
    };
    fontSize: number,
  }
}

declare namespace ChatSession {
  interface ISession {
    id: string,
    name: string,
    created: number,
    latest: number,
    messages: IMessage[],
    stickyOnTop?: boolean,
    assistantAvatar?: import('@/constants').AssistantAvatars,
  }

  interface IMessage {
    id: string,
    role: import('@/constants').Role,
    model?: import('@/constants').Model,
    created: number,
    content: string,
    generating?: boolean,
  }
}
