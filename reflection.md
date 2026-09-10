# AI Usage Reflection

## How did I break down the problem before prompting?

Before prompting, I broke the task down into the five required
operations: add, edit, delete, complete/incomplete, and persistence. I
decided the data model would be minimal — `id`, `text`, and `completed`
— and that `localStorage` was sufficient for persistence given the
assignment scope. I deliberately kept the project structure simple and
avoided introducing libraries or architectural layers that weren't
necessary, since the goal was a small, focused app rather than a
feature-maximal one.

## What did the AI get wrong, and how did I fix it?

I did not encounter a major functional bug that required rewriting the
implementation. Instead, I treated the generated code as a first version
and reviewed the important edge cases myself: empty and
whitespace-only input, editing and saving, task ID preservation, refresh
persistence, immutable state updates, and malformed `localStorage` data.
I also reviewed the responsive behavior and the overall scope to confirm
the implementation stayed focused on the requirements, refining
behaviors to be explicit and defensive rather than trusting the
generated code blindly.

## What did I deliberately not delegate to AI, and why?

I deliberately handled the product scope and final engineering
decisions myself. I wrote the prompt, decided which features were in
and out of scope, reviewed the generated implementation file by file,
and thought through the edge cases that could affect reliability. I
took responsibility for the final verification rather than assuming
AI-generated code was correct simply because it compiled and ran.

## What would I do differently with more time?

With more time, I would focus on verification rather than adding
features. I would add automated tests covering the core CRUD
operations, persistence, empty input, and malformed `localStorage`
data, and do more systematic browser and mobile-size testing along with
a dedicated accessibility review. I would keep the feature scope
unchanged rather than adding unnecessary functionality.

## Takeaway

AI can speed up implementation, but it does not replace engineering
judgment. The most important parts of this assignment were defining the
scope clearly, reviewing the generated code, thinking through edge
cases, and making sure the final implementation was simple enough that
I could understand and explain it myself.
