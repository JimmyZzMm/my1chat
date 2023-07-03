/**
 * pinia store 类型声明
 */
import {Model} from '@/constants';
declare namespace AppSystem {
  interface IConfig {
    openaiAPIKey: string,
    openaiAPIKeyStore: ModelStore,
    locale: import('@/constants').Language,
    theme: import('@/constants').Theme,
    model: Model,
    host: string,
    hostStore:ModelStore,
    fontSize: number,
  }
  interface ModelStore {
    [key:keyof Model]:string
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
