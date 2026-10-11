import SlashOutItems from "./components/SlashOutItems";

export default function App() {
  return (
    <div className="h-screen bg-gray-50 w-full flex items-center justify-center flex-col gap-4">
      <p className="font-Caveat text-3xl mb-8">Animated List Items</p>
      <SlashOutItems
        items={[
          { name: "Learn React", isChecked: true },
          { name: "Practice JavaScript", isChecked: false },
          { name: "Build a project", isChecked: true },
          { name: "Learn Tailwind CSS", isChecked: false },
          { name: "Practice coding problems", isChecked: false },
        ]}
      />
    </div>
  );
}
