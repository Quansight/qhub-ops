/**
 * Defines the datatypes that are recorded when 
 * the user selects their options. 
 * It will be used in the POST to the REST server.
 */
export interface IGeneralOptions {
    project_name: string,
    provider: string,
    ci_cd: string,
    domain: string
}

/**
 * The props that define all the options available;
 * these help "fill" the tables with the options that are
 * displayed.
 */
export interface IPropsGeneralOptions {
    project_name: string,
    provider_options: string[],
    ci_cd_options: string[],
    domain: string
}

/**
 * These are the descriptors that go to the infopanel
 * alongside the options selected above. 
 */
export interface IPropsGeneralOptionsDescriptions {
    project_name_desc: string;
    provider_logo_filepath: string[];
    provider_descriptions: string[];
    ci_cd_logo_filepath: string[];
    ci_cd_descriptions: string[];
}

/**
 * These are the authentication types that will be used
 * in order to show who gets access to the systems at hand
 */
interface AuthenticationConfiguration {
    client_id: string,
    client_secret: string,
    oauth_callback_url: string,
    scope?: string[],
    auth0_subdomain?: string
}

/**
 * This is the interface for one user in the "Users" table.
 * These will be populated dynamically as needed, and then
 * the data will be piped into some sort of grid interface. \
 * 
 * Subject to change
 */
interface IPropsUser {
    uid: number,
    primary_group: string[],
    secondary_group?: string[]
}

/**
 * This is the interface which stores an array of IPropsUser
 * and thus is the DataTable's main source of data; the dict mapping will be
 * username: IPropsUser
 */
export interface userDetails {
    users: { [username: string] : IPropsUser }
}

/**
 * This is the table that will display a configuration for the groups
 * that are available based on the primary_groups that are going to be
 * stored in the master state of the mini-application.
 *
 * number is `gid` 
 * Subject to change
 */
export interface IPropsGroups {
    groups: { [groupname: string] : number }
}

export interface IPropsAuthentication {
    type: string[],
    config: AuthenticationConfiguration
}

/**
 * This portion will gather data using a GET request to *something*
 * but that logic will depend on the cloud provider selected prior above.
 * Every click on the @continue button will update the state of the
 * configuration that is to be deployed, so an async request can be made in conjunction.
 */
interface IPropsNodeGroupDetails {
    instance: string[],
    min_nodes: number,
    max_nodes: number
}

interface GenericProviderDetails {
    region: string[],
    kubernetes_version: string[],
    general: IPropsNodeGroupDetails,
    worker: IPropsNodeGroupDetails,
    nodes: IPropsNodeGroupDetails
}

interface IPropsAWSDetails extends GenericProviderDetails {
   availability_zones: string[]
}

interface IPropsGCPDetails extends GenericProviderDetails {
   project: string,
   zone: string[],
   availability_zones: string[]
}

interface IPropsDODetails extends GenericProviderDetails {
}

export interface QConfiguration {
    general: IGeneralOptions,
    security: IPropsAuthentication,
    users: { [username: string] : IPropsUser },
    groups: { [groupname: string] : number },
    cloud_provider: IPropsAWSDetails | IPropsGCPDetails | IPropsDODetails
}

export interface IPropsUserMap {
    username: string, 
    uid: number,
    primary_group: string[],
    secondary_group?: string[]
 }