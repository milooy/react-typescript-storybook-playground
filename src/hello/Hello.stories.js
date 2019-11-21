import React from "react";
import Hello from "./Hello.tsx";
import { withKnobs, text, boolean } from "@storybook/addon-knobs";
import { action } from "@storybook/addon-actions";
import mdx from './Hello.mdx';

export default {
  title: "components|basic/Hello",
  component: Hello,
  decorators: [withKnobs],
  parameters: {
    componentSubtitle: '"안녕하세요"라고 보여주는 컴포넌트',
    docs: {
      page: mdx
    }
  },
};

export const hello = () => {
  const name = text("name", "Storybook");
  const big = boolean("big", false);
  return (
    <Hello
      name={name}
      big={big}
      onHello={action("onHello")}
      onBye={action("onBye")}
    />
  );
};

hello.story = {
  name: "Default"
};

export const standard = () => <Hello name="Storybook" />;

export const big = () => <Hello name="Storybook" big />;
