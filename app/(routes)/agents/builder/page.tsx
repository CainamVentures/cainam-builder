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
        <div className="min-h-screen bg-black text-white" data-oid="k4yo094">
            {/* Header */}
            <div className="border-b border-gray-800" data-oid="5cssb.e">
                <div className="container mx-auto px-4 py-4" data-oid="7j-3f2x">
                    <div className="flex items-center justify-between" data-oid="o8o4sk0">
                        <div className="flex items-center gap-4" data-oid="erv5vyw">
                            <Link href="/agents" data-oid="icdwcns">
                                <button
                                    className="text-gray-400 hover:text-white"
                                    data-oid="4-7ji3u"
                                >
                                    <IconArrowLeft size={20} data-oid="6icnwqd" />
                                </button>
                            </Link>
                            <h1 className="text-xl font-semibold" data-oid="8ykgi99">
                                Create New Agent
                            </h1>
                        </div>
                        <button
                            className="px-4 py-2 bg-orange-600 hover:bg-orange-700 rounded flex items-center gap-2"
                            data-oid="7m4gvqe"
                        >
                            <IconRocket size={20} data-oid="zhdszg4" />
                            Deploy Agent
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-8" data-oid=".732g.u">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" data-oid="3f40n5-">
                    {/* Left Column */}
                    <div className="space-y-6" data-oid="0kvv0k:">
                        {/* Basic Info */}
                        <section className="space-y-4" data-oid="6fea3el">
                            <h2 className="text-lg font-semibold" data-oid="4yqzbyu">
                                Basic Information
                            </h2>
                            <div className="space-y-4" data-oid="0e4nfcl">
                                <div data-oid="j0o4jsp">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="3cw668t"
                                    >
                                        Character Name
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        placeholder="Enter the character's name..."
                                        data-oid="2nxz4l-"
                                    />
                                </div>
                                <div data-oid="_9gbt2a">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid=".wwgqvh"
                                    >
                                        Model Provider
                                    </label>
                                    <select
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        data-oid="q2q_17o"
                                    >
                                        <option data-oid="qb45zxc">Select a provider...</option>
                                        <option data-oid="hjhbkkv">OpenAI</option>
                                        <option data-oid="i6_w_53">Anthropic</option>
                                    </select>
                                </div>
                                <div data-oid="po4jt1y">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="pnf43ri"
                                    >
                                        Voice Model
                                    </label>
                                    <select
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        data-oid="u43q6rq"
                                    >
                                        <option data-oid="y55nlm8">Select a voice model...</option>
                                    </select>
                                </div>
                            </div>
                        </section>

                        {/* Character Details */}
                        <section className="space-y-4" data-oid="7hdlys.">
                            <h2 className="text-lg font-semibold" data-oid="hrcpsh4">
                                Character Details
                            </h2>
                            <div className="space-y-4" data-oid="km41vkr">
                                <div data-oid="ch35cvs">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="kk1e8lt"
                                    >
                                        Bio
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Write the character's biography..."
                                        data-oid="hri.:1m"
                                    />
                                </div>
                                <div data-oid="65aj-zj">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="gn6q2nw"
                                    >
                                        Lore
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's world..."
                                        data-oid="do41z9l"
                                    />
                                </div>
                                <div data-oid="4iq2bl4">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="5wcg:.a"
                                    >
                                        Topics
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="List topics the character knows about..."
                                        data-oid="so:czgu"
                                    />
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-6" data-oid="9r8.ucb">
                        {/* Styles */}
                        <section className="space-y-4" data-oid="ytdbjgj">
                            <h2 className="text-lg font-semibold" data-oid="-sspbhc">
                                Interaction Styles
                            </h2>
                            <div className="space-y-4" data-oid="8:pq8fo">
                                <div data-oid="oj1.uxf">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="yp-.xj1"
                                    >
                                        General Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe how the character behaves..."
                                        data-oid="9cfo8ux"
                                    />
                                </div>
                                <div data-oid="ker1nob">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="kdu9.oz"
                                    >
                                        Chat Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's chat behavior..."
                                        data-oid="a:20uq0"
                                    />
                                </div>
                                <div data-oid="zns1.p7">
                                    <label
                                        className="block text-sm text-gray-400 mb-1"
                                        data-oid="2h1tfd."
                                    >
                                        Post Style
                                    </label>
                                    <textarea
                                        className="w-full bg-gray-900 border border-gray-800 rounded px-3 py-2 h-32"
                                        placeholder="Describe the character's posting style..."
                                        data-oid="ratugem"
                                    />
                                </div>
                            </div>
                        </section>

                        {/* Templates */}
                        <section className="space-y-4" data-oid="iw.fxm8">
                            <div className="flex justify-between items-center" data-oid="csnfaje">
                                <h2 className="text-lg font-semibold" data-oid="coi4960">
                                    Message Templates
                                </h2>
                                <button
                                    onClick={() => addField(setMessageTemplates)}
                                    className="text-orange-500 hover:text-orange-400"
                                    data-oid="wgmk2rl"
                                >
                                    <IconPlus size={20} data-oid="d4:js3x" />
                                </button>
                            </div>
                            {messageTemplates.map((template, index) => (
                                <div key={index} className="flex gap-2" data-oid="o_wq9q6">
                                    <input
                                        type="text"
                                        value={template}
                                        onChange={(e) =>
                                            updateField(index, e.target.value, setMessageTemplates)
                                        }
                                        className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                        placeholder="Add a message template..."
                                        data-oid="k8.3blq"
                                    />

                                    <button
                                        onClick={() => removeField(index, setMessageTemplates)}
                                        className="text-gray-500 hover:text-gray-400"
                                        data-oid="kkm-:-p"
                                    >
                                        <IconTrash size={20} data-oid="_walben" />
                                    </button>
                                </div>
                            ))}
                        </section>

                        {/* Adjectives & People */}
                        <div className="grid grid-cols-2 gap-4" data-oid="bxb69am">
                            <section className="space-y-4" data-oid=".n8f64v">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="dqiraq2"
                                >
                                    <h2 className="text-lg font-semibold" data-oid="grsbkx8">
                                        Adjectives
                                    </h2>
                                    <button
                                        onClick={() => addField(setAdjectives)}
                                        className="text-orange-500 hover:text-orange-400"
                                        data-oid="j9mb_61"
                                    >
                                        <IconPlus size={20} data-oid="hwbmwf6" />
                                    </button>
                                </div>
                                {adjectives.map((adj, index) => (
                                    <div key={index} className="flex gap-2" data-oid="yb_m8kf">
                                        <input
                                            type="text"
                                            value={adj}
                                            onChange={(e) =>
                                                updateField(index, e.target.value, setAdjectives)
                                            }
                                            className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                            placeholder="Add an adjective..."
                                            data-oid="anmjyp0"
                                        />

                                        <button
                                            onClick={() => removeField(index, setAdjectives)}
                                            className="text-gray-500 hover:text-gray-400"
                                            data-oid="n0lm_av"
                                        >
                                            <IconTrash size={20} data-oid="dpbpi42" />
                                        </button>
                                    </div>
                                ))}
                            </section>

                            <section className="space-y-4" data-oid="7vryikc">
                                <div
                                    className="flex justify-between items-center"
                                    data-oid="y5c6020"
                                >
                                    <h2 className="text-lg font-semibold" data-oid="qlc_llh">
                                        Known People
                                    </h2>
                                    <button
                                        onClick={() => addField(setKnownPeople)}
                                        className="text-orange-500 hover:text-orange-400"
                                        data-oid="lcz6_yz"
                                    >
                                        <IconPlus size={20} data-oid="regyqlj" />
                                    </button>
                                </div>
                                {knownPeople.map((person, index) => (
                                    <div key={index} className="flex gap-2" data-oid="6.ilghs">
                                        <input
                                            type="text"
                                            value={person}
                                            onChange={(e) =>
                                                updateField(index, e.target.value, setKnownPeople)
                                            }
                                            className="flex-1 bg-gray-900 border border-gray-800 rounded px-3 py-2"
                                            placeholder="Add a person..."
                                            data-oid="tmewxxv"
                                        />

                                        <button
                                            onClick={() => removeField(index, setKnownPeople)}
                                            className="text-gray-500 hover:text-gray-400"
                                            data-oid="mf4px9z"
                                        >
                                            <IconTrash size={20} data-oid="-51xwqs" />
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
