import * as elements from "typed-html";

export function Page() {
  return (
    <div class="w-screen h-[90vh] flex flex-col gap-4 justify-center items-center">
      <h1 class="text-4xl font-bold">Welcome to the Beth+ Stack</h1>
      <p>
        To begin, please edit{" "}
        <span class="italic font-mono border border-gray-500 px-2 py-1 rounded-lg">
          src/pages/index.tsx
        </span>
      </p>
    </div>
  );
}
