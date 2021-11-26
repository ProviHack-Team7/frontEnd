import { FunctionComponent as FC, ReactElement as RE, ReactNode } from 'react';
import Title from './title/Title';
import Subtitle from './subtitle/Subtitle';
import Paragraph from './paragraph/Paragraph';
import Span from './span/Span';
import Label from './label/Label';

interface SubProps {
  beforeText?: string;
  afterText?: string;
  children: string | string[] | ReactNode;
  styles?: Record<string, string>;
}

interface Props {
  Title: FC<SubProps>;
  Subtitle: FC<SubProps>;
  Paragraph: FC<SubProps>;
  Span: FC<SubProps>;
  Label: FC<SubProps>;
}

const Text: Props = (): void | RE => {};

Text.Title = Title;
Text.Subtitle = Subtitle;
Text.Paragraph = Paragraph;
Text.Span = Span;
Text.Label = Label;

export default Text;
