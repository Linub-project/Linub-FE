import { useState } from "react";

const createExample = () => ({
    content: "",
    description: ""
});

const createOption = () => ({
    name: "",
    longName: "",
    description: "",
    referenceId: null
});

const createArgument = (sequence = 1) => ({
    name: "",
    repeatable: false,
    required: false,
    description: "",
    constraints: "",
    valueType: "STRING",
    referenceId: null,
    sequence
});

const createSubcommand = () => ({
    name: "",
    description: "",
    syntax: "",
    subcommandOptions: [],
    subcommandArguments: []
});

const createFileFormatDescription = () => ({
    name: "",
    description: ""
});


const useDictionaryForm = (dictionaryType) => {
    // ==============================
    // 공통
    // ==============================

    const [basic, setBasic] = useState({
        topic: "",
        summary: "",
        content: ""
    });

    const [examples, setExamples] = useState([
        createExample()
    ]);

    const [categories, setCategories] = useState([]);
    const [relatedDictionaries, setRelatedDictionaries] = useState({
        CONCEPT: [],
        COMMAND: [],
        FILE: []
    });
    const [tags, setTags] = useState([]);


    // ==============================
    // COMMAND
    // ==============================

    const [commandSyntax, setCommandSyntax] = useState([""]);

    const [commandOptions, setCommandOptions] = useState([
        createOption()
    ]);

    const [commandArguments, setCommandArguments] = useState([
        createArgument()
    ]);

    const [subcommands, setSubcommands] = useState([
        createSubcommand()
    ]);


    // ==============================
    // FILE
    // ==============================

    const [fileInfo, setFileInfo] = useState({
        path: "",
        format: ""
    });

    const [
        fileFormatDescriptions,
        setFileFormatDescriptions
    ] = useState([
        createFileFormatDescription()
    ]);


    // ==============================
    // Utility
    // ==============================

    const updateArrayItem = (
        setter,
        index,
        field,
        value
    ) => {
        setter(prev =>
            prev.map((item, i) =>
                i === index
                    ? {
                        ...item,
                        [field]: value
                    }
                    : item
            )
        );
    };

    const removeArrayItem = (
        setter,
        index
    ) => {
        setter(prev =>
            prev.filter((_, i) => i !== index)
        );
    };


    // ==============================
    // Basic
    // ==============================

    const handleBasicChange = (field, value) => {
        setBasic(prev => ({
            ...prev,
            [field]: value
        }));
    };


    // ==============================
    // Example
    // ==============================

    const handleExampleChange = (
        index,
        field,
        value
    ) => {
        updateArrayItem(
            setExamples,
            index,
            field,
            value
        );
    };

    const handleExampleAdd = () => {
        setExamples(prev => [
            ...prev,
            createExample()
        ]);
    };

    const handleExampleRemove = (index) => {
        removeArrayItem(setExamples, index);
    };


    // ==============================
    // Category
    // ==============================

    const handleCategoryToggle = (categoryId) => {
        setCategories(prev =>
            prev.includes(categoryId)
                ? prev.filter(id => id !== categoryId)
                : [...prev, categoryId]
        );
    };


    // ==============================
    // Relation
    // ==============================

    const handleRelatedDictionaryToggle = (
        dictionaryType,
        dictionaryId
    ) => {
        setRelatedDictionaries(prev => {
            const current = prev[dictionaryType];

            const next = current.includes(dictionaryId)
                ? current.filter(id => id !== dictionaryId)
                : [...current, dictionaryId];

            return {
                ...prev,
                [dictionaryType]: next
            };
        });
    };


    // ==============================
    // Tag
    // ==============================

    const handleTagAdd = (tag) => {
        const value = tag.trim();

        if (!value) {
            return;
        }

        setTags(prev =>
            prev.includes(value)
                ? prev
                : [...prev, value]
        );
    };

    const handleTagRemove = (tag) => {
        setTags(prev =>
            prev.filter(value => value !== tag)
        );
    };


    // ==============================
    // Syntax
    // ==============================

    const handleSyntaxChange = (index, value) => {
        setCommandSyntax(prev =>
            prev.map((syntax, i) =>
                i === index ? value : syntax
            )
        );
    };

    const handleSyntaxAdd = () => {
        setCommandSyntax(prev => [
            ...prev,
            ""
        ]);
    };

    const handleSyntaxRemove = (index) => {
        setCommandSyntax(prev =>
            prev.filter((_, i) => i !== index)
        );
    };


    // ==============================
    // Option
    // ==============================

    const handleOptionChange = (
        index,
        field,
        value
    ) => {
        updateArrayItem(
            setCommandOptions,
            index,
            field,
            value
        );
    };

    const handleOptionAdd = () => {
        setCommandOptions(prev => [
            ...prev,
            createOption()
        ]);
    };

    const handleOptionRemove = (index) => {
        removeArrayItem(
            setCommandOptions,
            index
        );
    };


    // ==============================
    // Argument
    // ==============================

    const handleArgumentChange = (
        index,
        field,
        value
    ) => {
        updateArrayItem(
            setCommandArguments,
            index,
            field,
            value
        );
    };

    const handleArgumentAdd = () => {
        setCommandArguments(prev => [
            ...prev,
            createArgument(prev.length + 1)
        ]);
    };

    const handleArgumentRemove = (index) => {
        setCommandArguments(prev =>
            prev
                .filter((_, i) => i !== index)
                .map((argument, i) => ({
                    ...argument,
                    sequence: i + 1
                }))
        );
    };


    // ==============================
    // Subcommand
    // ==============================

    const handleSubcommandChange = (
        subcommandIndex,
        field,
        value
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) =>
                i === subcommandIndex
                    ? {
                        ...subcommand,
                        [field]: value
                    }
                    : subcommand
            )
        );
    };

    const handleSubcommandAdd = () => {
        setSubcommands(prev => [
            ...prev,
            createSubcommand()
        ]);
    };

    const handleSubcommandRemove = (
        subcommandIndex
    ) => {
        setSubcommands(prev =>
            prev.filter((_, i) =>
                i !== subcommandIndex
            )
        );
    };


    // ==============================
    // Subcommand Option
    // ==============================

    const handleSubcommandOptionChange = (
        subcommandIndex,
        optionIndex,
        field,
        value
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) => {
                if (i !== subcommandIndex) {
                    return subcommand;
                }

                return {
                    ...subcommand,

                    subcommandOptions:
                        subcommand.subcommandOptions.map(
                            (option, j) =>
                                j === optionIndex
                                    ? {
                                        ...option,
                                        [field]: value
                                    }
                                    : option
                        )
                };
            })
        );
    };

    const handleSubcommandOptionAdd = (
        subcommandIndex
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) =>
                i === subcommandIndex
                    ? {
                        ...subcommand,

                        subcommandOptions: [
                            ...subcommand.subcommandOptions,
                            createOption()
                        ]
                    }
                    : subcommand
            )
        );
    };

    const handleSubcommandOptionRemove = (
        subcommandIndex,
        optionIndex
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) => {
                if (i !== subcommandIndex) {
                    return subcommand;
                }

                return {
                    ...subcommand,

                    subcommandOptions:
                        subcommand.subcommandOptions.filter(
                            (_, j) =>
                                j !== optionIndex
                        )
                };
            })
        );
    };


    // ==============================
    // Subcommand Argument
    // ==============================

    const handleSubcommandArgumentChange = (
        subcommandIndex,
        argumentIndex,
        field,
        value
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) => {
                if (i !== subcommandIndex) {
                    return subcommand;
                }

                return {
                    ...subcommand,

                    subcommandArguments:
                        subcommand.subcommandArguments.map(
                            (argument, j) =>
                                j === argumentIndex
                                    ? {
                                        ...argument,
                                        [field]: value
                                    }
                                    : argument
                        )
                };
            })
        );
    };

    const handleSubcommandArgumentAdd = (
        subcommandIndex
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) => {
                if (i !== subcommandIndex) {
                    return subcommand;
                }

                return {
                    ...subcommand,

                    subcommandArguments: [
                        ...subcommand.subcommandArguments,

                        createArgument(
                            subcommand.subcommandArguments.length + 1
                        )
                    ]
                };
            })
        );
    };

    const handleSubcommandArgumentRemove = (
        subcommandIndex,
        argumentIndex
    ) => {
        setSubcommands(prev =>
            prev.map((subcommand, i) => {
                if (i !== subcommandIndex) {
                    return subcommand;
                }

                const newArguments =
                    subcommand.subcommandArguments
                        .filter(
                            (_, j) =>
                                j !== argumentIndex
                        )
                        .map((argument, j) => ({
                            ...argument,
                            sequence: j + 1
                        }));

                return {
                    ...subcommand,
                    subcommandArguments: newArguments
                };
            })
        );
    };


    // ==============================
    // File
    // ==============================

    const handleFileChange = (
        field,
        value
    ) => {
        setFileInfo(prev => ({
            ...prev,
            [field]: value
        }));
    };


    // ==============================
    // File Format Description
    // ==============================

    const handleFileFormatDescriptionChange = (
        index,
        field,
        value
    ) => {
        updateArrayItem(
            setFileFormatDescriptions,
            index,
            field,
            value
        );
    };

    const handleFileFormatDescriptionAdd = () => {
        setFileFormatDescriptions(prev => [
            ...prev,
            createFileFormatDescription()
        ]);
    };

    const handleFileFormatDescriptionRemove = (
        index
    ) => {
        removeArrayItem(
            setFileFormatDescriptions,
            index
        );
    };


    // ==============================
    // Request 생성
    // ==============================

    const createRequest = () => {
        const relations = [
            ...relatedDictionaries.CONCEPT,
            ...relatedDictionaries.COMMAND,
            ...relatedDictionaries.FILE
        ];

        const common = {
            ...basic,
            dictionaryType,

            examples,
            categories,
            relations,
            tags
        };

        if (dictionaryType === "COMMAND") {
            return {
                ...common,
                syntax: commandSyntax,
                subcommands,
                options: commandOptions,
                arguments: commandArguments
            };
        }

        if (dictionaryType === "FILE") {
            return {
                ...common,
                path: fileInfo.path,
                format: fileInfo.format,

                fileFormatDescriptions:
                    fileFormatDescriptions.map(
                        (description, index) => ({
                            ...description,
                            position: index + 1
                        })
                    )
            };
        }

        return common;
    };


    // ==============================
    // Reset
    // ==============================

    const resetForm = () => {
        setBasic({
            topic: "",
            summary: "",
            content: ""
        });

        setExamples([
            createExample()
        ]);

        setCategories([]);
        setRelatedDictionaries({
            CONCEPT: [],
            COMMAND: [],
            FILE: []
        });([]);
        setTags([]);

        setCommandSyntax([""]);

        setCommandOptions([
            createOption()
        ]);

        setCommandArguments([
            createArgument()
        ]);

        setSubcommands([
            createSubcommand()
        ]);

        setFileInfo({
            path: "",
            format: ""
        });

        setFileFormatDescriptions([
            createFileFormatDescription()
        ]);
    };


    return {
        values: {
            basic,

            examples,
            categories,
            tags,

            relatedDictionaries,

            commandSyntax,
            commandOptions,
            commandArguments,
            subcommands,

            fileInfo,
            fileFormatDescriptions
        },

        handlers: {
            handleBasicChange,

            handleExampleChange,
            handleExampleAdd,
            handleExampleRemove,

            handleCategoryToggle,

            handleRelatedDictionaryToggle,

            handleTagAdd,
            handleTagRemove,

            handleSyntaxChange,
            handleSyntaxAdd,
            handleSyntaxRemove,

            handleOptionChange,
            handleOptionAdd,
            handleOptionRemove,

            handleArgumentChange,
            handleArgumentAdd,
            handleArgumentRemove,

            handleSubcommandChange,
            handleSubcommandAdd,
            handleSubcommandRemove,

            handleSubcommandOptionChange,
            handleSubcommandOptionAdd,
            handleSubcommandOptionRemove,

            handleSubcommandArgumentChange,
            handleSubcommandArgumentAdd,
            handleSubcommandArgumentRemove,

            handleFileChange,

            handleFileFormatDescriptionChange,
            handleFileFormatDescriptionAdd,
            handleFileFormatDescriptionRemove
        },

        createRequest,
        resetForm
    };
};

export default useDictionaryForm;