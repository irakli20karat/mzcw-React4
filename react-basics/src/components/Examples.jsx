import TabButton from './TabButton'
import { useState } from 'react'

export default function Examples({ data }) {
  const [selectedTopic, setSelectedTopic] = useState("Select a topic");

  function onSelect(value) {
    setSelectedTopic(value);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>
      <menu>
        {data.map((entry, idx) => (
          <TabButton handleClick={() => onSelect(entry.description)} key={idx}>{entry.title}</TabButton>
        ))}
      </menu>
      {selectedTopic}
    </section>
  )
}