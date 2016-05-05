export interface ILoggerInterface {
    /**
     * System is unusable.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    emergency(level: string, message: string, context: Array<Object>): void;
    /**
     * Action must be taken immediately.
     *
     * Example: Entire website down, database unavailable, etc. This should
     * trigger the SMS alerts and wake you up.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    alert(level: string, message: string, context: Array<Object>): void;
    /**
     * Critical conditions.
     *
     * Example: Application component unavailable, unexpected exception.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    critical(level: string, message: string, context: Array<Object>): void;
    /**
     * Runtime errors that do not require immediate action but should typically
     * be logged and monitored.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    error(level: string, message: string, context: Array<Object>): void;
    /**
     * Exceptional occurrences that are not errors.
     *
     * Example: Use of deprecated APIs, poor use of an API, undesirable things
     * that are not necessarily wrong.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    warning(level: string, message: string, context: Array<Object>): void;
    /**
     * Normal but significant events.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    notice(level: string, message: string, context: Array<Object>): void;
    /**
     * Interesting events.
     *
     * Example: User logs in, SQL logs.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    info(level: string, message: string, context: Array<Object>): void;
    /**
     * Detailed debug information.
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    debug(level: string, message: string, context: Array<Object>): void;
    /**
     * Logs with an arbitrary level.
     *
     *
     * @param any level
     * @param string message
     * @param array context
     * @return null
     */
    log(level: string, message: string, context: Array<Object>): void;
}
export declare let log: ILoggerInterface;
