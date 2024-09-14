---
name: "components"
root: "./src/components"
output: "**/*"
ignore: ["./src/components"]
questions:
  name: "Please enter a component name."
  test:
    confirm: "Do you need a test?"
    initial: true
---

# `{{ inputs.name | pascal }}/index.tsx`

```tsx
import React, { PropsWithChildren } from "react";

interface Props {}

const {{ inputs.name | pascal }} = ({ children }: PropsWithChildren<Props>) => {
  return <div>{children}</div>;
};

export default {{ inputs.name | pascal }};
```

# `{{ inputs.name | pascal }}/index.stories.tsx`

```tsx
import type { Meta, StoryObj } from "@storybook/react";
import {{ inputs.name | pascal }} from "./index";

const meta = {
  title: "{{ inputs.name | pascal }}",
  component: {{ inputs.name | pascal }},
  parameters: { layout: "centered" },
  tags: ["autodocs"],
} satisfies Meta<typeof {{ inputs.name | pascal }}>;

export default meta;
type Story = StoryObj<typeof meta>;

/** Primary Comment */
export const Primary: Story = {
  args: {
    children: "children",
  },
};

/** Secondary Comment */
export const Secondary: Story = {
  args: {
    children: "children",
  },
};
```

# `{{ inputs.name | pascal }}/index.module.css`

```css
.wrapper {
}
```

# `{{ !inputs.test && '!' }}{{ inputs.name | pascal }}/index.test.tsx`

```ts
import { describe, expect, test } from "vitest";
import {{ inputs.name | pascal }} from "./index"

describe("{{ inputs.name | pascal }}", () => {

  test('test comment', () => {})

});
```
