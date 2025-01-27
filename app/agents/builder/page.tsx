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
        <div className="min-h-screen bg-black text-white" data-oid=".5hycf7">
            {/* Header */}
            <div className="border-b border-gray-800" data-oid="wxbw_04">
                <div className="container mx-auto px-4 py-4" data-oid="2.0.aq0">
                    <div className="flex items-center justify-between" data-oid="tmc.kjz">
                        <div className="flex items-center gap-4" data-oid="y7_r.:q">
                            <Link href="/agents" data-oid=".638_ze">
                                <button
                                    className="text-gray-400 hover:text-white"
                                    data-oid="bzrs4ig"
                                >
                                    <IconArrowLeft size={20} data-oid="pfhow-v" />
                                </button>
                            </Link>
                            <h1 className="text-xl font-semibold" data-oid=":dwyu6d">
                                Create New Agent
                            </h1>
                        </div>
                        <button
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded flex items-center gap-2"
                            data-oid="cpdj9c9"
                        >
                            <IconRocket size={20} data-oid="_e7ce16" />
                            Deploy Agent
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8" data-oid="shr4ter">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="wn0r3.m">
                    {/* Left Column */}
                    <div className="space-y-6" data-oid="1_fu_nr">
                        {/* Basic Info */}
                        <section className="space-y-4" data-oid="gc-bv8s">
                            <h2 className="text-lg font-semibold" data-oid="1w70uzs">
                                Basic Information
                            </h2>
                            <div className="space-y-4" data-oid="7au1:jn">
                                <div data-oid="jrak:cl">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="incc7s4"
                                    >
                                        Character Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        placeholder="Enter the character's name..."
                                        data-oid="5fhvzq6"
                                    />
                                </div>
                                <div data-oid="000txwc">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="7rdwq0c"
                                    >
                                        Model Provider
                                    </label>
                                    <select
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        data-oid="1d6rqo5"
                                    >
                                        <option data-oid=":_pswiv">Select a provider...</option>
                                        <option data-oid="kygbt7d">OpenAI</option>
                                        <option data-oid="f9oy197">Anthropic</option>
                                    </select>
                                </div>
                                <div data-oid="014qvgp">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="5cmcq-o"
                                    >
                                        Voice Model
                                    </label>
                                    <select
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        data-oid="kh2z40m"
                                    >
                                        <option data-oid="fgqm9vo">Select a voice model...</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Character Details */}
                        <section className="space-y-4" data-oid=":81-4:5">
                            <h2 className="text-lg font-semibold" data-oid="j-p-g6y">
                                Character Details
                            </h2>
                            <div className="space-y-4" data-oid="kkpln9r">
                                <div data-oid="-mmzkfr">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="cf:z730"
                                    >
                                        Bio
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Write the character's biography..."
                                        data-oid="51efxra"
                                    />
                                </div>
                                <div data-oid="bg9-zx.">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="a2q7vy2"
                                    >
                                        Lore
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's world..."
                                        data-oid="kd04qls"
                                    />
                                </div>
                                <div data-oid="eqmmk.v">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="_8w5iqu"
                                    >
                                        Topics
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="List topics the character knows about..."
                                        data-oid="z3mb066"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6" data-oid="ylop0fz">
                        {/* Styles */}
                        <section className="space-y-4" data-oid="yqaurt-">
                            <h2 className="text-lg font-semibold" data-oid="zj2.4.0">
                                Interaction Styles
                            </h2>
                            <div className="space-y-4" data-oid="-8ge09q">
                                <div data-oid="9h.wqdn">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="t8qcg7b"
                                    >
                                        General Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe how the character behaves..."
                                        data-oid="u2wz5k:"
                                    />
                                </div>
                                <div data-oid=".clsc-t">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="4ojdxio"
                                    >
                                        Chat Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's chat behavior..."
                                        data-oid="2tbu0br"
                                    />
                                </div>
                                <div data-oid="zpqy54n">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="7cjhhwr"
                                    >
                                        Post Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's posting style..."
                                        data-oid="9ukk3w2"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Templates */}
                        <section className="space-y-4" data-oid="e1a63wp">
                            <div className="flex justify-between items-center" data-oid="y-0a.u5">
                                <h2 className="text-lg font-semibold" data-oid="_axrjm7">
                                    Message Templates
                                </h2>
                                <button
                                    onClick={() => addField(setMessageTemplates)}
                                    className="text-orange-500 hover:text-orange-400"
                                    data-oid="y2n_17m"
                                >
                                    <IconPlus size={20} data-oid="uwmv9jq" />
                                </button>
                            </div>
                            {messageTemplates.map((template, index) => (
                                <div key={index} className="flex gap-2" data-oid="i4-q10c">
                                    <input
                                        type="text"
                                        value={template}
                                        onChange={(e) =>
                                            updateField(index, e.target.value, setMessageTemplates)
                                        }
                                        className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        placeholder="Add a message template..."
                                        data-oid="w6lokdq"
                                    />

                                    <button
                                        onClick={() => removeField(index, setMessageTemplates)}
                                        className="text-gray-500 hover:text-gray-400"
                                        data-oid="3zdjzip"
                                    >
                                        <IconTrash size={20} data-oid="eebvhf6" />
                                    </button>
                                </div>
                            ))}
                        </section>

                        {/* Adjectives & People */}
                        <div className="grid grid-cols-2 gap-4" data-oid="si6d:46">
                            <section className="space-y-4" data-oid="4-3cyi4">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="g70firt"
                                >
                                    <h2 className="text-lg font-semibold" data-oid=":v55zc2">
                                        Adjectives
                                    </h2>
                                    <button
                                        onClick={() => addField(setAdjectives)}
                                        className="text-orange-500 hover:text-orange-400"
                                        data-oid="fdn.uch"
                                    >
                                        <IconPlus size={20} data-oid="8:8r5rp" />
                                    </button>
                                </div>
                                {adjectives.map((adj, index) => (
                                    <div key={index} className="flex gap-2" data-oid="9w9dmnj">
                                        <input
                                            type="text"
                                            value={adj}
                                            onChange={(e) =>
                                                updateField(index, e.target.value, setAdjectives)
                                            }
                                            className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                            placeholder="Add an adjective..."
                                            data-oid="._1rsg."
                                        />

                                        <button
                                            onClick={() => removeField(index, setAdjectives)}
                                            className="text-gray-500 hover:text-gray-400"
                                            data-oid="rd-i.5a"
                                        >
                                            <IconTrash size={20} data-oid="_bufor2" />
                                        </button>
                                    </div>
                                ))}
                            </section>

                            <section className="space-y-4" data-oid="380pavx">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="-51j.ki"
                                >
                                    <h2 className="text-lg font-semibold" data-oid="5vah__r">
                                        Known People
                                    </h2>
                                    <button
                                        onClick={() => addField(setKnownPeople)}
                                        className="text-orange-500 hover:text-orange-400"
                                        data-oid="4e1b:ng"
                                    >
                                        <IconPlus size={20} data-oid="13lvq7c" />
                                    </button>
                                </div>
                                {knownPeople.map((person, index) => (
                                    <div key={index} className="flex gap-2" data-oid="bq.q77:">
                                        <input
                                            type="text"
                                            value={person}
                                            onChange={(e) =>
                                                updateField(index, e.target.value, setKnownPeople)
                                            }
                                            className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                            placeholder="Add a person..."
                                            data-oid="68iavd-"
                                        />

                                        <button
                                            onClick={() => removeField(index, setKnownPeople)}
                                            className="text-gray-500 hover:text-gray-400"
                                            data-oid="ow_oxqr"
                                        >
                                            <IconTrash size={20} data-oid="suti1i9" />
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
