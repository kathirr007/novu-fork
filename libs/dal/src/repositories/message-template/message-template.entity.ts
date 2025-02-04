import { StepTypeEnum, IMessageCTA, IActor } from '@novu/shared';

import { IEmailBlock, ITemplateVariable } from './types';
import type { OrganizationId } from '../organization';
import type { EnvironmentId } from '../environment';
import type { ChangePropsValueType } from '../../types/helpers';

export class MessageTemplateEntity {
  _id: string;

  _environmentId: EnvironmentId;

  _organizationId: OrganizationId;

  _creatorId: string;

  // TODO: Due a circular dependency I can't import LayoutId from Layout.
  _layoutId: string | null;

  type: StepTypeEnum;

  variables?: ITemplateVariable[];

  content: string | IEmailBlock[];

  contentType?: 'editor' | 'customHtml';

  active?: boolean;

  subject?: string;

  title?: string;

  name?: string;

  preheader?: string;

  senderName?: string;

  _feedId?: string;

  cta?: IMessageCTA;

  _parentId?: string;

  actor?: IActor;
}

export type MessageTemplateDBModel = ChangePropsValueType<
  MessageTemplateEntity,
  '_environmentId' | '_organizationId' | '_creatorId' | '_layoutId' | '_feedId' | '_parentId'
>;
