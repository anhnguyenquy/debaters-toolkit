import { topics } from './data/topics'
export const getFormattedTopicsFromValues = (topicValues) => {
    let topicArray = {}
    topicValues.forEach(topicValue => {
        topics.forEach(topicItem => {
            if (topicItem.value == topicValue) {
                topicArray[`${topicValue}`] = {
                    check: true,
                    title: topicItem.label
                }
            }
        })
    })
    return topicArray
}