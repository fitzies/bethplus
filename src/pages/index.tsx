import * as elements from "typed-html";

export function Page() {
  return (
    <div class="w-screen h-screen flex flex-col gap-4 justify-center items-center">
      <h1 class="text-4xl font-bold">Welcome to the Beth+ Stack</h1>
      <p>
        To begin, please edit
        <span class="italic font-mono border border-gray-500 px-2 py-1 rounded-lg">
          src/pages/index.tsx
        </span>
      </p>
      <div class="flex justify-center items-center gap-3 my-8 font-bold">
        <h2>Counter (on the server): </h2>
        <div hx-get="/counter" hx-trigger="load" id="count"></div>
        <button
          class="border border-gray-700 px-2 py-1 rounded-lg"
          hx-post="/counter"
          hx-trigger="click"
          hx-swap="innerHTML"
          hx-target="#count"
        >
          +
        </button>
      </div>
    </div>
  );
}
