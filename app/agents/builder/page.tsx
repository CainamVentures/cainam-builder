'use client';

import { useState } from 'react';
import {
    IconArrowLeft,
    IconPlus,
    IconTrash,
    IconChevronRight,
    IconRocket,
} from '@tabler/icons-react';
import Link from 'next/link';
export default function AgentBuilder() {
    const [messageTemplates, setMessageTemplates] = useState(['']);
    const [adjectives, setAdjectives] = useState(['']);
    const [knownPeople, setKnownPeople] = useState(['']);
    const addField = (setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter((prev) => [...prev, '']);
    };
    const removeField = (index: number, setter: React.Dispatch<React.SetStateAction<string[]>>) => {
        setter((prev) => prev.filter((_, i) => i !== index));
    };
    const updateField = (
        index: number,
        value: string,
        setter: React.Dispatch<React.SetStateAction<string[]>>,
    ) => {
        setter((prev) => prev.map((item, i) => (i === index ? value : item)));
    };
    return (
        <div className="min-h-screen bg-black text-white">
            {/* Header */}
            <div className="border-b border-gray-800">
                <div className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <Link href="/agents">
                                <button className="text-gray-400 hover:text-white">
                                    <IconArrowLeft size={20} />
                                </button>
                            </Link>
                            <h1 className="text-xl font-semibold">Create New Agent</h1>
                        </div>
                        <button className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded flex items-center gap-2">
                            <IconRocket size={20} />
                            Deploy Agent
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Left Column */}
                    <div className="space-y-6">
                        {/* Basic Info */}
                        <section className="space-y-4">
                            <h2 className="text-lg font-semibold">Basic Information</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Character Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        placeholder="Enter the character's name..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Model Provider
                                    </label>
                                    <select className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2">
                                        <option>Select a provider...</option>
                                        <option>OpenAI</option>
                                        <option>Anthropic</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Voice Model
                                    </label>
                                    <select className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2">
                                        <option>Select a voice model...</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Character Details */}
                        <section className="space-y-4">
                            <h2 className="text-lg font-semibold">Character Details</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Bio</label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Write the character's biography..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">Lore</label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's world..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Topics
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="List topics the character knows about..."
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6">
                        {/* Styles */}
                        <section className="space-y-4">
                            <h2 className="text-lg font-semibold">Interaction Styles</h2>
                            <div className="space-y-4">
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        General Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe how the character behaves..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Chat Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's chat behavior..."
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm text-gray-400 mb-1">
                                        Post Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's posting style..."
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Templates */}
                        <section className="space-y-4">
                            <div className="flex justify-between items-center">
                                <h2 className="text-lg font-semibold">Message Templates</h2>
                                <button
                                    onClick={() => addField(setMessageTemplates)}
                                    className="text-orange-500 hover:text-orange-400"
                                >
                                    <IconPlus size={20} />
                                </button>
                            </div>
                            {messageTemplates.map((template, index) => (
                                <div key={index} className="flex gap-2">
                                    <input
                                        type="text"
                                        value={template}
                                        onChange={(e) =>
                                            updateField(index, e.target.value, setMessageTemplates)
                                        }
                                        className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        placeholder="Add a message template..."
                                    />

                                    <button
                                        onClick={() => removeField(index, setMessageTemplates)}
                                        className="text-gray-500 hover:text-gray-400"
                                    >
                                        <IconTrash size={20} />
                                    </button>
                                </div>
                            ))}
                        </section>

                        {/* Adjectives & People */}
                        <div className="grid grid-cols-2 gap-4">
                            <section className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">Adjectives</h2>
                                    <button
                                        onClick={() => addField(setAdjectives)}
                                        className="text-orange-500 hover:text-orange-400"
                                    >
                                        <IconPlus size={20} />
                                    </button>
                                </div>
                                {adjectives.map((adj, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={adj}
                                            onChange={(e) =>
                                                updateField(index, e.target.value, setAdjectives)
                                            }
                                            className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                            placeholder="Add an adjective..."
                                        />

                                        <button
                                            onClick={() => removeField(index, setAdjectives)}
                                            className="text-gray-500 hover:text-gray-400"
                                        >
                                            <IconTrash size={20} />
                                        </button>
                                    </div>
                                ))}
                            </section>

                            <section className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <h2 className="text-lg font-semibold">Known People</h2>
                                    <button
                                        onClick={() => addField(setKnownPeople)}
                                        className="text-orange-500 hover:text-orange-400"
                                    >
                                        <IconPlus size={20} />
                                    </button>
                                </div>
                                {knownPeople.map((person, index) => (
                                    <div key={index} className="flex gap-2">
                                        <input
                                            type="text"
                                            value={person}
                                            onChange={(e) =>
                                                updateField(index, e.target.value, setKnownPeople)
                                            }
                                            className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                            placeholder="Add a person..."
                                        />

                                        <button
                                            onClick={() => removeField(index, setKnownPeople)}
                                            className="text-gray-500 hover:text-gray-400"
                                        >
                                            <IconTrash size={20} />
                                        </button>
                                    </div>
                                ))}
                            </section>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
