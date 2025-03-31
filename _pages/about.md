---
permalink: /
layout: single
author_profile: true
toc: true
toc_sticky: true
---

# About Me

Hi! I am **Shahad Mahmud**.

As a *Machine Learning Engineer* and *Researcher*, I am passionate about exploring the exciting world of Natural Language Processing (NLP), with a particular focus on the Bangla language. I am always eager to learn about the latest technologies and coding practices that can help me push the boundaries of what's possible in this field.

## At a glance

- More than 5 years of research and work experience in NLP including LLMs and Agents.
- Open-source contributions at Hugging Face's [Transformers](https://github.com/huggingface/transformers/pulls?q=author%3Ashahad-mahmud){:target="_blank"}, Bangla [unicode converter](https://pypi.org/project/unicodeconverter/){:target="_blank"}, and Incremental Learning for ASR paper [implementation](https://github.com/shahad-mahmud/incremental_learning_for_asr){:target="_blank"}.
- Pursued Bachelor of Science in Computer Science and Engineering (CSE) from Rajshahi University of Engineering and Technology ([RUET](https://www.ruet.ac.bd/){:target="_blank"}).

## Recent Blog Posts

<div class="entries-list">
   {% for post in site.posts limit:3 %}
    {% include archive-single.html %}
   {% endfor %}
</div>

## Recent Updates

- *[October 2024]* Joined [Delineate](https://delineate.pro/) (YC W25) as Sr. AI Engineer and Team Lead.
- *[October 2023]* A Research paper on Bangla Lemmatization has been accepted at Finding of **EMNLP 2023**.
- *[July 2023]* Found a bug in Sentencepiece tokenizer from the Transformers repository. Created an issue and after discussion solved the bug with an accepted PR.
- *[April 2023]* Merged 2 PRs at the Transformers repository.
- *[October 2022]* Joined Giga Tech Limited as Machine Learning Engineer.

## Work Experiences

> "Experience is the teacher of all things" - Julius Caesar

### Delineate (YC W25)

**Sr. AI Engineer & Team Lead** \| remote \| *October 2024 - Present*

Currently working at Delineate as a Sr. AI Engineer and AI team lead. Here I work with LLMs, Agents, ML system design and implementations.

### Giga Tech Limited

**Machine Learning Engineer** \| hybrid \| *October 2022 - Present*

My time at [Giga Tech Limited](https://gigatechltd.com/){:target="_blank"} has been a wonderful journey filled with learning and growth. Here, I've had the chance to dive into the world of NLP techniques, all with the goal of making NLP methods in the Bangla language even better. Along the way, I've become comfortable working with complex systems and handle critical tasks. It's been a great experience, full of teamwork, learning, and solving interesting challenges. At Giga Tech Limited, I -

- Developed NER, POS, QA, and semantic similarity systems and successfully deployed them using ONNX, quantization, FastAPI, etc., improving overall system performance.
- Accomplished the development and deployment of language model pre-training, data preparation, and fine-tuning pipelines (BERT, XLNet, GPT-2, T5) for the Bangla language.
- Spearheaded research initiatives resulting in the creation of a highly accurate rule-based Lemmatizer specifically designed for Bangla, achieving a 90.17% accuracy rate.
- Developed a comprehensive Bangla text processing toolkit, including normalization techniques that reduced data ambiguity by approximately 32% and streamlined text cleaning functionalities.
- Strengthened code reusability and collaboration by establishing an internal PyPI server for efficient package distribution and increased productivity.

### REVE Systems

**Software Engineer** \| *April 2021 - August 2022*

During my time at [REVE Systems](https://revesoft.com/){:target="_blank"}, I mainly focused on crafting an Automatic Speech Recognition (ASR) system for Bangla. This project was like a thrilling adventure that nudged me to learn, grow, and surpass my boundaries. With every challenge, I embraced new knowledge and skills, setting the stage for the advancement of my career. REVE Systems was like a launchpad that truly helped me flourish as a Machine Learning Engineer. At this organization, I -

- Researched and developed non-streaming and streaming Automatic Speech Recognition (ASR) systems for the Bangla language. Integrated an externally trained Language Model which improved the performances about 2.2 times.
- Explored and studied methods, analyzed data, and contributed to developing a Bangla corpus containing 10,000 hours of speech data with parallel transcriptions.
- Developed a speech-to-text time-alignment module using the CTC segmentation technique, significantly reducing the annotation process time.
- Integrated knowledge distillation based incremental/ continual learning mechanism for ASR by implementing RBKD and EBKD losses for regularization and got 73% coverage on previous test cases which enabled the team to run quick experiments on new data and make the models adopt.
- With limited data developed context-based duplicate question suggestion system using a pre-trained BERT model for the Bangladesh Parliament.
- Developed and exposed APIs for integrating the ML models with applications and gRPC server for streaming speech recognition.

## Publications

### BanLemma: A Word Formation Dependent Rule and Dictionary Based Bangla Lemmatizer

Sadia Afrin, **Md Shahad Mahmud Chowdhury**, Md Ekramul Islam, Faisal Ahamed Khan, Labib Imam Chowdhury, M. D. Motahar Mahtab, Nazifa Nuha Chowdhury, et al. In *The 2023 Conference on Empirical Methods in Natural Language Processing (EMNLP)*, 2023.

The paper proposes BanLemma, a new rule-based lemmatizer specifically designed for the Bangla language with the following key aspects:

- It uses linguistically derived rules for lemmatization based on extensive analysis of a large 90.65 million sentence Bangla text corpus. The rules depend on the part-of-speech (PoS) class and interpret the process of how inflected words are formed from base words.
- It utilizes sequences of suffix markers instead of full suffixes, analyzing how markers combine to form suffixes according to morpho-syntactic behavior. Separate marker sequences are defined for nouns, pronouns, verbs, adjectives etc.
- A dictionary is used alongside the rules to map inflected forms to lemmas. The dictionary has 71.5k entries organized by PoS.
- Evaluation shows 96.36% accuracy on a human-annotated test set. BanLemma also outperforms prior Bangla lemmatization methods by 1-11% in cross-dataset testing.

### BERT-Based Emotion Classification Approach with Analysis of COVID-19 Pandemic Tweets

**Md. Shahad Mahmud Chowhdury** and Biprodip Pal; *Applied Informatics for Industry 4.0 by Taylor & Francis; February, 2023*

While social media are broadly used to express opinions and emotions, emotion detection and classification from text is a challenging problem due to the lack of facial or voice expressions. This paper proposes a machine-learning model that, unlike manual feature extraction techniques, leverages the neural attention approach to detect emotions through meaningful feature extraction.

**Firstly,** this research contributes to take a deep learning approach for the classification of six types of emotions from the text using the benchmark ISEAR dataset.

**Secondly,** The model predictions have been explained using the model agnostic approach. Thirdly, emotions in the tweets related to COVID-19 have been classified and quantified along with an illustration of the emotion dynamics during the Corona Pandemic before and after the start of the vaccination.

**Finally,** N-gram analysis has been used for the summarization of the contributing factors. In terms of emotion classification from ISEAR data, our approach comes out with a better F1 score of .72 compared to some other state-of-the-art works.

## Open-source Contributions

### Transformers

Transformers from Hugging Face 🤗 is a popular library that I use regularly. I have been contributing to this repository in case of any update or bug. View my contributions at the Transformers repository [here](https://github.com/huggingface/transformers/pulls?q=author%3Ashahad-mahmud){:target="_blank"}.

### Unicode Converter

This is a tool developed using python in order to converting Bangla ASCII writing system (like Bijoy) to unicode writing system (like Avro). This tool is distributed as a python package also which was downloaded more than **9k** times. Find the package at [PyPi](https://pypi.org/project/unicodeconverter/){:target="_blank"} or view the source code at [Github](https://github.com/shahad-mahmud/unicode_converter){:target="_blank"}.

### Incremental Learning for ASR

Implemented the *Incremental Learning for End-to-End Automatic Speech Recognition* paper by Li Fu et al. It is a knowledge distillation based incremental learning approach that regularize the student model with two novel losses including RBKD and EBKD. Find the implementation at [Github](https://github.com/shahad-mahmud/incremental_learning_for_asr){:target="_blank"}.

## Educations

### Bachelor of Science in Engineering

In 2021, I completed Bachelor of Science in Computer Science and Engineer from Rajshahi University of Engineering and Technology (RUET). Besides my academic study, I participated in programming contests, developed some android and web-based applications, conducted my thesis using Deep Learning techniques in NLP, and solved programming problems in various online sites including Codeforces, LightOJ, SPOJ, etc.
